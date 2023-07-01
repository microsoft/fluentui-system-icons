package com.microsoft.fluent.mobile

import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp

object FluentIcons {
  object Filled
  object Regular
}

internal inline fun fluentIcon(
  name: String,
  size: Float,
  block: ImageVector.Builder.() -> ImageVector.Builder
): ImageVector = ImageVector.Builder(
  name = name,
  defaultWidth = size.dp,
  defaultHeight = size.dp,
  viewportWidth = size,
  viewportHeight = size
).block().build()