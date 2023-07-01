package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff32: ImageVector
  get() {
    if (_cloudOff32 != null) {
      return _cloudOff32!!
    }
    _cloudOff32 = fluentIcon(name = "Filled.CloudOff32", 32f) {
      materialPath {
          moveTo(23.573F, 24.987F)
          lineToRelative(4.72F, 4.72F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(6.575F, 6.575F)
          curveToRelative(-0.44F, 0.901F, -0.703F, 1.854F, -0.81F, 2.765F)
          curveTo(3.93F, 13.47F, 2.0F, 16.644F, 2.0F, 19.0F)
          curveToRelative(0.0F, 1.145F, 0.284F, 2.664F, 1.373F, 3.908F)
          curveTo(4.485F, 24.18F, 6.293F, 25.0F, 9.0F, 25.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.194F, 0.0F, 0.385F, -0.005F, 0.573F, -0.013F)
          close()
          moveToRelative(4.583F, -1.589F)
          curveToRelative(-0.218F, 0.19F, -0.453F, 0.363F, -0.704F, 0.519F)
          lineTo(11.084F, 7.549F)
          curveTo(12.329F, 6.6F, 13.962F, 5.999F, 16.0F, 5.999F)
          curveToRelative(1.7F, 0.0F, 3.682F, 0.562F, 5.259F, 1.852F)
          curveToRelative(1.42F, 1.162F, 2.472F, 2.887F, 2.697F, 5.206F)
          curveToRelative(1.377F, 0.165F, 2.713F, 0.683F, 3.78F, 1.507F)
          curveTo(29.063F, 15.59F, 30.0F, 17.114F, 30.0F, 19.0F)
          curveToRelative(0.0F, 1.753F, -0.583F, 3.303F, -1.844F, 4.398F)
          close()        
      }
    }
    return _cloudOff32!!
  }

private var _cloudOff32: ImageVector? = null
