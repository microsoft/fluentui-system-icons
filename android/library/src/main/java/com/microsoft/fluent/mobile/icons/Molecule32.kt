package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Molecule32: ImageVector
  get() {
    if (_molecule32 != null) {
      return _molecule32!!
    }
    _molecule32 = fluentIcon(name = "Filled.Molecule32", 32f) {
      materialPath {
          moveTo(22.0F, 16.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 1.006F, 0.212F, 1.962F, 0.594F, 2.826F)
          lineToRelative(-2.83F, 2.2F)
          curveTo(11.757F, 12.79F, 10.22F, 12.0F, 8.5F, 12.0F)
          curveTo(5.462F, 12.0F, 3.0F, 14.462F, 3.0F, 17.5F)
          reflectiveCurveTo(5.462F, 23.0F, 8.5F, 23.0F)
          curveToRelative(1.574F, 0.0F, 2.994F, -0.661F, 3.996F, -1.721F)
          lineToRelative(4.775F, 2.679F)
          curveTo(17.096F, 24.439F, 17.0F, 24.958F, 17.0F, 25.5F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveToRelative(-2.015F, -4.5F, -4.5F, -4.5F)
          curveToRelative(-1.221F, 0.0F, -2.329F, 0.486F, -3.14F, 1.276F)
          lineToRelative(-4.774F, -2.679F)
          curveTo(13.853F, 18.951F, 14.0F, 18.242F, 14.0F, 17.5F)
          curveToRelative(0.0F, -0.59F, -0.093F, -1.16F, -0.266F, -1.694F)
          lineToRelative(2.929F, -2.277F)
          curveTo(17.947F, 15.041F, 19.86F, 16.0F, 22.0F, 16.0F)
          close()        
      }
    }
    return _molecule32!!
  }

private var _molecule32: ImageVector? = null
