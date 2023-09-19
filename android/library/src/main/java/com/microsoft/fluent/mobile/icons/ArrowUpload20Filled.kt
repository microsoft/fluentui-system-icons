package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpload20: ImageVector
  get() {
    if (_arrowUpload20 != null) {
      return _arrowUpload20!!
    }
    _arrowUpload20 = fluentIcon(name = "Filled.ArrowUpload20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(4.086F, 2.0F, 3.75F, 2.336F, 3.75F, 2.75F)
          reflectiveCurveTo(4.086F, 3.5F, 4.5F, 3.5F)
          horizontalLineTo(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.414F, 2.0F, 15.0F, 2.0F)
          horizontalLineTo(4.5F)
          close()
          moveToRelative(5.996F, 15.35F)
          curveToRelative(-0.05F, 0.365F, -0.363F, 0.648F, -0.743F, 0.648F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(7.058F)
          lineTo(6.03F, 10.027F)
          lineTo(5.946F, 10.1F)
          curveToRelative(-0.294F, 0.217F, -0.71F, 0.193F, -0.977F, -0.074F)
          curveToRelative(-0.292F, -0.293F, -0.292F, -0.768F, 0.001F, -1.06F)
          lineTo(9.26F, 4.68F)
          curveToRelative(0.074F, -0.065F, 0.16F, -0.115F, 0.257F, -0.146F)
          lineToRelative(0.08F, -0.023F)
          curveTo(9.648F, 4.5F, 9.699F, 4.495F, 9.75F, 4.495F)
          lineToRelative(0.06F, 0.002F)
          lineToRelative(0.069F, 0.008F)
          lineToRelative(0.12F, 0.03F)
          lineToRelative(0.091F, 0.037F)
          lineToRelative(0.037F, 0.022F)
          lineToRelative(0.09F, 0.058F)
          lineToRelative(0.072F, 0.063F)
          lineToRelative(4.242F, 4.25F)
          lineToRelative(0.073F, 0.085F)
          curveToRelative(0.217F, 0.293F, 0.193F, 0.71F, -0.074F, 0.976F)
          lineTo(14.445F, 10.1F)
          curveToRelative(-0.294F, 0.217F, -0.71F, 0.193F, -0.976F, -0.074F)
          lineToRelative(-2.966F, -2.97F)
          verticalLineToRelative(10.193F)
          lineToRelative(-0.007F, 0.101F)
          close()        
      }
    }
    return _arrowUpload20!!
  }

private var _arrowUpload20: ImageVector? = null
