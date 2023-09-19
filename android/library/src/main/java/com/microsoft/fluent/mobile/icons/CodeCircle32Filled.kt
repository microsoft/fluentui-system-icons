package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CodeCircle32: ImageVector
  get() {
    if (_codeCircle32 != null) {
      return _codeCircle32!!
    }
    _codeCircle32 = fluentIcon(name = "Filled.CodeCircle32", 32f) {
      materialPath {
          moveTo(30.0F, 16.0F)
          curveToRelative(0.0F, -7.732F, -6.268F, -14.0F, -14.0F, -14.0F)
          reflectiveCurveTo(2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          close()
          moveTo(19.918F, 9.394F)
          lineToRelative(-6.0F, 14.0F)
          curveToRelative(-0.217F, 0.508F, -0.805F, 0.743F, -1.313F, 0.525F)
          curveToRelative(-0.508F, -0.217F, -0.743F, -0.805F, -0.525F, -1.313F)
          lineToRelative(6.0F, -14.0F)
          curveToRelative(0.218F, -0.507F, 0.805F, -0.742F, 1.313F, -0.525F)
          curveToRelative(0.508F, 0.218F, 0.743F, 0.806F, 0.525F, 1.313F)
          close()
          moveToRelative(-8.26F, 3.859F)
          lineTo(8.518F, 16.0F)
          lineToRelative(3.14F, 2.748F)
          curveToRelative(0.416F, 0.363F, 0.458F, 0.995F, 0.095F, 1.41F)
          curveToRelative(-0.364F, 0.416F, -0.996F, 0.458F, -1.412F, 0.095F)
          lineToRelative(-4.0F, -3.5F)
          curveTo(6.125F, 16.563F, 6.0F, 16.288F, 6.0F, 16.0F)
          reflectiveCurveToRelative(0.125F, -0.563F, 0.341F, -0.752F)
          lineToRelative(4.0F, -3.5F)
          curveToRelative(0.416F, -0.364F, 1.048F, -0.322F, 1.412F, 0.094F)
          curveToRelative(0.363F, 0.415F, 0.321F, 1.047F, -0.095F, 1.41F)
          close()
          moveToRelative(8.59F, 6.906F)
          curveToRelative(-0.364F, -0.416F, -0.322F, -1.048F, 0.093F, -1.412F)
          lineTo(23.482F, 16.0F)
          lineToRelative(-3.14F, -2.747F)
          curveToRelative(-0.415F, -0.364F, -0.457F, -0.996F, -0.094F, -1.411F)
          curveToRelative(0.364F, -0.416F, 0.996F, -0.458F, 1.412F, -0.095F)
          lineToRelative(4.0F, 3.5F)
          curveTo(25.875F, 15.438F, 26.0F, 15.713F, 26.0F, 16.0F)
          curveToRelative(0.0F, 0.289F, -0.125F, 0.563F, -0.341F, 0.753F)
          lineToRelative(-4.0F, 3.5F)
          curveToRelative(-0.416F, 0.363F, -1.048F, 0.321F, -1.412F, -0.094F)
          close()        
      }
    }
    return _codeCircle32!!
  }

private var _codeCircle32: ImageVector? = null
