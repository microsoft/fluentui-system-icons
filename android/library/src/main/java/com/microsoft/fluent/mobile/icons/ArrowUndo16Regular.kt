package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUndo16: ImageVector
  get() {
    if (_arrowUndo16 != null) {
      return _arrowUndo16!!
    }
    _arrowUndo16 = fluentIcon(name = "Regular.ArrowUndo16", 16f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineToRelative(3.843F)
          lineToRelative(3.171F, -3.171F)
          curveToRelative(1.562F, -1.563F, 4.095F, -1.563F, 5.657F, 0.0F)
          curveToRelative(1.562F, 1.562F, 1.562F, 4.094F, 0.0F, 5.656F)
          lineToRelative(-5.025F, 5.026F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(5.025F, -5.025F)
          curveToRelative(1.171F, -1.171F, 1.171F, -3.07F, 0.0F, -4.242F)
          curveToRelative(-1.172F, -1.172F, -3.071F, -1.172F, -4.243F, 0.0F)
          lineTo(4.757F, 7.0F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 7.0F, 9.0F, 7.224F, 9.0F, 7.5F)
          reflectiveCurveTo(8.776F, 8.0F, 8.5F, 8.0F)
          horizontalLineTo(3.6F)
          curveTo(3.269F, 8.0F, 3.0F, 7.731F, 3.0F, 7.4F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _arrowUndo16!!
  }

private var _arrowUndo16: ImageVector? = null
