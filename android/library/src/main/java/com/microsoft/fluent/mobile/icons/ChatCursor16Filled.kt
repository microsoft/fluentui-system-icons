package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatCursor16: ImageVector
  get() {
    if (_chatCursor16 != null) {
      return _chatCursor16!!
    }
    _chatCursor16 = fluentIcon(name = "Filled.ChatCursor16", 16f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 0.362F, -0.039F, 0.716F, -0.112F, 1.057F)
          lineTo(9.861F, 5.398F)
          curveTo(8.72F, 4.463F, 7.003F, 5.276F, 7.003F, 6.752F)
          lineTo(7.002F, 11.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.873F, 0.0F, -1.694F, -0.224F, -2.41F, -0.618F)
          lineToRelative(-1.944F, 0.592F)
          curveToRelative(-0.177F, 0.054F, -0.369F, 0.006F, -0.5F, -0.125F)
          curveToRelative(-0.13F, -0.13F, -0.178F, -0.322F, -0.124F, -0.499F)
          lineToRelative(0.592F, -1.947F)
          curveTo(2.223F, 7.689F, 2.0F, 6.87F, 2.0F, 6.0F)
          close()
          moveToRelative(7.228F, 0.172F)
          lineToRelative(5.496F, 4.497F)
          curveTo(15.27F, 11.116F, 14.954F, 12.0F, 14.25F, 12.0F)
          horizontalLineToRelative(-2.986F)
          curveToRelative(-0.157F, 0.0F, -0.304F, 0.074F, -0.399F, 0.2F)
          lineTo(9.35F, 14.204F)
          curveToRelative(-0.433F, 0.574F, -1.348F, 0.267F, -1.348F, -0.452F)
          lineToRelative(0.002F, -7.0F)
          curveToRelative(0.0F, -0.04F, 0.003F, -0.078F, 0.008F, -0.115F)
          curveToRelative(0.083F, -0.558F, 0.758F, -0.84F, 1.217F, -0.465F)
          close()        
      }
    }
    return _chatCursor16!!
  }

private var _chatCursor16: ImageVector? = null
