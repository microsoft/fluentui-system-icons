package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUpDown20: ImageVector
  get() {
    if (_chevronUpDown20 != null) {
      return _chevronUpDown20!!
    }
    _chevronUpDown20 = fluentIcon(name = "Regular.ChevronUpDown20", 20f) {
      materialPath {
          moveTo(14.911F, 7.216F)
          curveToRelative(0.135F, 0.195F, 0.116F, 0.464F, -0.057F, 0.638F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 3.707F)
          lineTo(5.854F, 7.854F)
          lineTo(5.784F, 7.91F)
          curveTo(5.59F, 8.046F, 5.32F, 8.027F, 5.146F, 7.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(4.5F, -4.5F)
          lineToRelative(0.07F, -0.057F)
          curveToRelative(0.195F, -0.135F, 0.464F, -0.116F, 0.638F, 0.058F)
          lineToRelative(4.5F, 4.5F)
          lineToRelative(0.057F, 0.069F)
          close()
          moveTo(5.09F, 12.784F)
          curveToRelative(-0.135F, -0.195F, -0.116F, -0.464F, 0.057F, -0.638F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(10.0F, 16.293F)
          lineToRelative(4.146F, -4.147F)
          lineToRelative(0.07F, -0.057F)
          curveToRelative(0.195F, -0.135F, 0.464F, -0.116F, 0.638F, 0.057F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.5F, 4.5F)
          lineToRelative(-0.07F, 0.057F)
          curveToRelative(-0.195F, 0.135F, -0.464F, 0.116F, -0.638F, -0.057F)
          lineToRelative(-4.5F, -4.5F)
          lineToRelative(-0.057F, -0.07F)
          close()        
      }
    }
    return _chevronUpDown20!!
  }

private var _chevronUpDown20: ImageVector? = null
