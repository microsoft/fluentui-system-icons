package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReply24: ImageVector
  get() {
    if (_arrowReply24 != null) {
      return _arrowReply24!!
    }
    _arrowReply24 = fluentIcon(name = "Filled.ArrowReply24", 24f) {
      materialPath {
          moveTo(9.704F, 16.294F)
          curveToRelative(0.39F, 0.391F, 0.39F, 1.024F, 0.0F, 1.415F)
          curveToRelative(-0.392F, 0.39F, -1.025F, 0.39F, -1.415F, -0.001F)
          lineToRelative(-4.997F, -5.004F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.023F, 0.0F, -1.413F)
          lineTo(8.29F, 6.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.415F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.023F, 0.0F, 1.414F)
          lineTo(6.41F, 11.0F)
          horizontalLineTo(13.0F)
          curveToRelative(4.335F, 0.0F, 7.864F, 3.448F, 7.996F, 7.75F)
          lineTo(21.0F, 19.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -3.238F, -2.566F, -5.878F, -5.775F, -5.996F)
          lineTo(13.0F, 13.0F)
          horizontalLineTo(6.414F)
          lineToRelative(3.29F, 3.294F)
          close()        
      }
    }
    return _arrowReply24!!
  }

private var _arrowReply24: ImageVector? = null
