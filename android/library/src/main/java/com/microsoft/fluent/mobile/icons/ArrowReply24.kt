package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReply24: ImageVector
  get() {
    if (_arrowReply24 != null) {
      return _arrowReply24!!
    }
    _arrowReply24 = fluentIcon(name = "Regular.ArrowReply24", 24f) {
      materialPath {
          moveTo(9.277F, 16.221F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.294F, -0.768F, 0.293F, -1.061F, 0.0F)
          lineToRelative(-4.997F, -5.003F)
          curveToRelative(-0.292F, -0.293F, -0.292F, -0.768F, 0.0F, -1.06F)
          lineTo(8.217F, 6.22F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveTo(9.57F, 6.513F, 9.57F, 6.987F, 9.278F, 7.28F)
          lineTo(5.557F, 11.0F)
          horizontalLineToRelative(7.842F)
          curveToRelative(1.595F, 0.0F, 2.81F, 0.242F, 3.889F, 0.764F)
          lineToRelative(0.246F, 0.126F)
          curveToRelative(1.109F, 0.593F, 1.983F, 1.467F, 2.576F, 2.576F)
          curveToRelative(0.61F, 1.14F, 0.89F, 2.418F, 0.89F, 4.135F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -1.484F, -0.228F, -2.52F, -0.713F, -3.428F)
          curveToRelative(-0.453F, -0.847F, -1.113F, -1.507F, -1.96F, -1.96F)
          curveToRelative(-0.838F, -0.448F, -1.786F, -0.676F, -3.094F, -0.709F)
          lineTo(13.4F, 12.5F)
          horizontalLineTo(5.562F)
          lineToRelative(3.715F, 3.721F)
          close()        
      }
    }
    return _arrowReply24!!
  }

private var _arrowReply24: ImageVector? = null
