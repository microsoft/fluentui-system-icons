package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReply20: ImageVector
  get() {
    if (_arrowReply20 != null) {
      return _arrowReply20!!
    }
    _arrowReply20 = fluentIcon(name = "Regular.ArrowReply20", 20f) {
      materialPath {
          moveTo(3.707F, 9.0F)
          lineToRelative(3.39F, 3.39F)
          curveToRelative(0.194F, 0.195F, 0.194F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.174F, 0.173F, -0.444F, 0.193F, -0.639F, 0.058F)
          lineTo(6.39F, 13.097F)
          lineTo(2.147F, 8.854F)
          curveTo(1.973F, 8.68F, 1.954F, 8.411F, 2.089F, 8.216F)
          lineToRelative(0.058F, -0.07F)
          lineToRelative(4.242F, -4.242F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveTo(7.27F, 4.078F, 7.29F, 4.347F, 7.154F, 4.542F)
          lineToRelative(-0.058F, 0.07F)
          lineTo(3.707F, 8.0F)
          horizontalLineTo(10.0F)
          curveToRelative(4.06F, 0.0F, 7.368F, 3.228F, 7.496F, 7.258F)
          lineTo(17.5F, 15.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          curveToRelative(0.0F, -3.512F, -2.785F, -6.374F, -6.267F, -6.496F)
          lineTo(10.0F, 9.0F)
          horizontalLineTo(3.707F)
          lineToRelative(3.39F, 3.39F)
          lineTo(3.706F, 9.0F)
          close()        
      }
    }
    return _arrowReply20!!
  }

private var _arrowReply20: ImageVector? = null
