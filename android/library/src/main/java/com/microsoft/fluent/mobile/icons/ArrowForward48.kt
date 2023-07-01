package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowForward48: ImageVector
  get() {
    if (_arrowForward48 != null) {
      return _arrowForward48!!
    }
    _arrowForward48 = fluentIcon(name = "Regular.ArrowForward48", 48f) {
      materialPath {
          moveTo(34.985F, 22.5F)
          lineToRelative(-7.061F, 7.061F)
          curveToRelative(-0.488F, 0.489F, -0.488F, 1.28F, 0.0F, 1.768F)
          curveToRelative(0.455F, 0.456F, 1.175F, 0.486F, 1.666F, 0.091F)
          lineToRelative(0.102F, -0.09F)
          lineToRelative(9.192F, -9.193F)
          curveToRelative(0.456F, -0.456F, 0.486F, -1.176F, 0.091F, -1.666F)
          lineToRelative(-0.091F, -0.102F)
          lineToRelative(-9.192F, -9.192F)
          curveToRelative(-0.489F, -0.489F, -1.28F, -0.489F, -1.768F, 0.0F)
          curveToRelative(-0.456F, 0.455F, -0.486F, 1.175F, -0.091F, 1.666F)
          lineToRelative(0.09F, 0.101F)
          lineTo(34.982F, 20.0F)
          horizontalLineTo(26.0F)
          curveToRelative(-3.254F, 0.0F, -6.28F, 0.721F, -8.904F, 2.1F)
          lineToRelative(-0.41F, 0.223F)
          curveToRelative(-2.683F, 1.503F, -4.86F, 3.68F, -6.364F, 6.363F)
          curveTo(8.798F, 31.403F, 8.0F, 34.576F, 8.0F, 38.0F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(10.5F, 38.69F, 10.5F, 38.0F)
          curveToRelative(0.0F, -3.005F, 0.692F, -5.756F, 2.003F, -8.092F)
          curveToRelative(1.278F, -2.281F, 3.124F, -4.127F, 5.405F, -5.406F)
          curveToRelative(2.207F, -1.237F, 4.783F, -1.924F, 7.594F, -1.996F)
          lineTo(26.0F, 22.5F)
          horizontalLineToRelative(8.985F)
          close()        
      }
    }
    return _arrowForward48!!
  }

private var _arrowForward48: ImageVector? = null
