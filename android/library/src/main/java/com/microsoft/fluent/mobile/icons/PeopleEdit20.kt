package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PeopleEdit20: ImageVector
  get() {
    if (_peopleEdit20 != null) {
      return _peopleEdit20!!
    }
    _peopleEdit20 = fluentIcon(name = "Filled.PeopleEdit20", 20f) {
      materialPath {
          moveTo(6.75F, 9.0F)
          curveTo(8.545F, 9.0F, 10.0F, 7.545F, 10.0F, 5.75F)
          reflectiveCurveTo(8.545F, 2.5F, 6.75F, 2.5F)
          reflectiveCurveTo(3.5F, 3.955F, 3.5F, 5.75F)
          reflectiveCurveTo(4.955F, 9.0F, 6.75F, 9.0F)
          close()
          moveTo(10.0F, 10.0F)
          curveToRelative(1.086F, 0.0F, 1.97F, 0.866F, 2.0F, 1.944F)
          lineToRelative(-1.726F, 1.726F)
          curveToRelative(-0.41F, 0.41F, -0.7F, 0.923F, -0.841F, 1.485F)
          lineToRelative(-0.106F, 0.423F)
          curveTo(8.652F, 15.838F, 7.807F, 16.0F, 6.75F, 16.0F)
          curveTo(1.5F, 16.0F, 1.5F, 12.0F, 1.5F, 12.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(7.0F, -3.5F)
          curveToRelative(0.0F, 0.602F, -0.213F, 1.155F, -0.568F, 1.586F)
          curveToRelative(-0.359F, 0.438F, -0.864F, 0.75F, -1.44F, 0.866F)
          curveTo(14.833F, 8.983F, 14.668F, 9.0F, 14.5F, 9.0F)
          curveTo(13.12F, 9.0F, 12.0F, 7.88F, 12.0F, 6.5F)
          reflectiveCurveTo(13.12F, 4.0F, 14.5F, 4.0F)
          reflectiveCurveTo(17.0F, 5.12F, 17.0F, 6.5F)
          close()
          moveToRelative(-1.19F, 3.048F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.282F, 0.28F, -0.482F, 0.634F, -0.578F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.651F, 0.428F, 1.241F, 1.079F, 1.078F)
          lineToRelative(1.498F, -0.374F)
          curveToRelative(0.386F, -0.097F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          curveToRelative(-0.73F, -0.73F, -1.915F, -0.73F, -2.645F, 0.0F)
          close()        
      }
    }
    return _peopleEdit20!!
  }

private var _peopleEdit20: ImageVector? = null
