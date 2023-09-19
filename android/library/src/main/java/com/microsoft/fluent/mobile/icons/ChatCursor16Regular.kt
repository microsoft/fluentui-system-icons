package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatCursor16: ImageVector
  get() {
    if (_chatCursor16 != null) {
      return _chatCursor16!!
    }
    _chatCursor16 = fluentIcon(name = "Regular.ChatCursor16", 16f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 0.364F, -0.039F, 0.718F, -0.113F, 1.06F)
          lineToRelative(-0.9F, -0.737F)
          curveTo(10.996F, 6.217F, 11.0F, 6.11F, 11.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveTo(3.0F, 3.79F, 3.0F, 6.0F)
          curveToRelative(0.0F, 0.763F, 0.213F, 1.474F, 0.583F, 2.08F)
          curveToRelative(0.074F, 0.122F, 0.093F, 0.27F, 0.051F, 0.406F)
          lineTo(3.251F, 9.745F)
          lineToRelative(1.257F, -0.383F)
          curveTo(4.645F, 9.32F, 4.793F, 9.34F, 4.915F, 9.414F)
          curveTo(5.52F, 9.785F, 6.234F, 10.0F, 6.998F, 10.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(-0.872F, 0.0F, -1.693F, -0.224F, -2.407F, -0.618F)
          lineToRelative(-1.945F, 0.592F)
          curveToRelative(-0.177F, 0.054F, -0.369F, 0.006F, -0.5F, -0.125F)
          curveToRelative(-0.13F, -0.13F, -0.178F, -0.322F, -0.124F, -0.499F)
          lineToRelative(0.592F, -1.947F)
          curveTo(2.223F, 7.689F, 2.0F, 6.87F, 2.0F, 6.0F)
          close()
          moveToRelative(12.72F, 4.67F)
          curveToRelative(0.546F, 0.447F, 0.23F, 1.33F, -0.475F, 1.33F)
          horizontalLineTo(11.26F)
          curveToRelative(-0.157F, 0.0F, -0.304F, 0.074F, -0.399F, 0.2F)
          lineToRelative(-1.514F, 2.005F)
          curveToRelative(-0.434F, 0.574F, -1.35F, 0.267F, -1.349F, -0.453F)
          lineTo(8.0F, 6.753F)
          curveToRelative(0.0F, -0.633F, 0.735F, -0.98F, 1.225F, -0.58F)
          lineToRelative(5.496F, 4.497F)
          close()        
      }
    }
    return _chatCursor16!!
  }

private var _chatCursor16: ImageVector? = null
