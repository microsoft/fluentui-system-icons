#!/usr/bin/env node
"use strict";

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(REPO_ROOT, "assets");
const OUTPUT_DIR = path.join(REPO_ROOT, "reports");
const PER_FOLDER_DIR = path.join(OUTPUT_DIR, "by-folder");

/**
 * Escapes a value for safe inclusion in CSV
 * Wraps in double quotes and escapes existing quotes
 */
function csvEscape(value) {
  const str = String(value ?? "");
  const needsQuotes = /[",\n,]/.test(str) || str.includes("\r");
  const escaped = str.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

/**
 * Convert a relative path within assets to a GitHub raw URL.
 * Each path segment is URL-encoded to preserve spaces and special chars.
 */
function toRawGithubUrl(relPathFromAssets) {
  const encodedSegments = relPathFromAssets
    .split(path.sep)
    .map((seg) => encodeURIComponent(seg));
  const encodedPath = encodedSegments.join("/");
  return `https://raw.githubusercontent.com/microsoft/fluentui-system-icons/refs/heads/main/assets/${encodedPath}`;
}

/**
 * Parse metadata from a file name like:
 *   ic_fluent_access_time_24_filled.svg
 * Returns { iconSlug, size, style } if matched; otherwise nulls.
 */
function parseIconMeta(fileName) {
  const base = fileName.replace(/\.svg$/i, "");
  // Typical patterns: ic_fluent_<icon_slug>_<size>_<style>
  // style is usually filled|regular|light|resizable
  const match = base.match(/^ic_fluent_(.+?)_(\d+)_([a-z]+)$/i);
  if (match) {
    return {
      iconSlug: match[1],
      size: match[2],
      style: match[3].toLowerCase(),
    };
  }

  // Fallback: try to capture style-less names or variants
  const sizeMatch = base.match(/_(\d+)(?:_|$)/);
  return {
    iconSlug: base.replace(/^ic_fluent_/, ""),
    size: sizeMatch ? sizeMatch[1] : "",
    style: "",
  };
}

async function ensureDir(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

async function walkForSvgs(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await walkForSvgs(fullPath);
      results.push(...nested);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg")) {
      results.push(fullPath);
    }
  }
  return results;
}

function buildRow(record) {
  const columns = [
    record.category,
    record.iconSlug,
    record.size,
    record.style,
    record.fileName,
    record.relativePath,
    record.rawUrl,
  ].map(csvEscape);
  return columns.join(",") + "\n";
}

async function writeCsv(filePath, header, rows) {
  const content = header + "\n" + rows.join("");
  await fsp.writeFile(filePath, content, "utf8");
}

async function main() {
  const header = [
    "category",
    "icon_slug",
    "size",
    "style",
    "file_name",
    "relative_path",
    "raw_url",
  ].join(",");

  await ensureDir(OUTPUT_DIR);
  await ensureDir(PER_FOLDER_DIR);

  const svgFiles = await walkForSvgs(ASSETS_DIR);

  const rows = [];
  const byCategory = new Map();

  for (const absPath of svgFiles) {
    const relativePathFromAssets = path.relative(ASSETS_DIR, absPath);
    // Category is the first path segment under assets
    const [category = ""] = relativePathFromAssets.split(path.sep);
    const fileName = path.basename(absPath);
    const { iconSlug, size, style } = parseIconMeta(fileName);
    const rawUrl = toRawGithubUrl(relativePathFromAssets);

    const record = {
      category,
      iconSlug,
      size,
      style,
      fileName,
      relativePath: path.posix.join(...relativePathFromAssets.split(path.sep)),
      rawUrl,
    };

    const row = buildRow(record);
    rows.push(row);

    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category).push(row);
  }

  // Write master CSV
  const masterCsvPath = path.join(OUTPUT_DIR, "svg-master.csv");
  await writeCsv(masterCsvPath, header, rows);

  // Write per-folder CSVs
  for (const [category, catRows] of byCategory.entries()) {
    const safeCategory = category.replace(/[^\w\-]+/g, "_");
    const catPath = path.join(PER_FOLDER_DIR, `${safeCategory}.csv`);
    await writeCsv(catPath, header, catRows);
  }

  // Also emit a simple README with a note
  const readme = [
    "This directory contains generated CSV listings of all SVG icons.",
    "- svg-master.csv: All icons across the repository.",
    "- by-folder/*.csv: Icons grouped by the first-level folder under assets/.",
    "",
    "Raw URLs follow the pattern used by microsoft/fluentui-system-icons main branch.",
  ].join("\n");
  await fsp.writeFile(path.join(OUTPUT_DIR, "README.txt"), readme, "utf8");

  // Log a small summary
  /* eslint-disable no-console */
  console.log(`Generated ${rows.length} entries.`);
  console.log(`Master CSV: ${masterCsvPath}`);
  console.log(`Per-folder CSVs: ${PER_FOLDER_DIR}`);
}

main().catch((err) => {
  /* eslint-disable no-console */
  console.error(err);
  process.exit(1);
});


