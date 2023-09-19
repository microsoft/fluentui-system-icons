package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SignOut20: ImageVector
  get() {
    if (_signOut20 != null) {
      return _signOut20!!
    }
    _signOut20 = fluentIcon(name = "Regular.SignOut20", 20f) {
      materialPath {
          moveTo(8.5F, 11.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(8.914F, 9.75F, 8.5F, 9.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()
          moveTo(11.0F, 3.5F)
          curveToRelative(0.0F, -0.146F, -0.064F, -0.284F, -0.174F, -0.38F)
          curveToRelative(-0.11F, -0.094F, -0.257F, -0.136F, -0.402F, -0.114F)
          lineToRelative(-7.0F, 1.07F)
          curveTo(3.18F, 4.113F, 3.0F, 4.323F, 3.0F, 4.57F)
          verticalLineToRelative(10.86F)
          curveToRelative(0.0F, 0.247F, 0.18F, 0.457F, 0.424F, 0.494F)
          lineToRelative(7.0F, 1.071F)
          curveToRelative(0.145F, 0.022F, 0.291F, -0.02F, 0.402F, -0.115F)
          curveToRelative(0.11F, -0.095F, 0.174F, -0.233F, 0.174F, -0.379F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(5.172F)
          lineToRelative(-0.997F, 0.874F)
          curveToRelative(-0.207F, 0.182F, -0.228F, 0.497F, -0.047F, 0.705F)
          curveToRelative(0.182F, 0.208F, 0.497F, 0.23F, 0.705F, 0.047F)
          lineToRelative(1.996F, -1.75F)
          curveTo(17.939F, 9.781F, 18.0F, 9.644F, 18.0F, 9.5F)
          reflectiveCurveToRelative(-0.062F, -0.281F, -0.17F, -0.376F)
          lineToRelative(-1.997F, -1.75F)
          curveToRelative(-0.208F, -0.182F, -0.523F, -0.161F, -0.705F, 0.047F)
          curveToRelative(-0.181F, 0.208F, -0.16F, 0.523F, 0.047F, 0.705F)
          lineTo(16.172F, 9.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(3.5F)
          close()
          moveToRelative(-1.0F, 0.582F)
          verticalLineTo(15.92F)
          lineTo(4.0F, 15.0F)
          verticalLineTo(4.999F)
          lineToRelative(6.0F, -0.917F)
          close()
          moveTo(12.5F, 16.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          close()
          moveTo(12.0F, 8.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(0.5F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _signOut20!!
  }

private var _signOut20: ImageVector? = null
