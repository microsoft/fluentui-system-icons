package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabAdd20: ImageVector
  get() {
    if (_tabAdd20 != null) {
      return _tabAdd20!!
    }
    _tabAdd20 = fluentIcon(name = "Regular.TabAdd20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(4.1F)
          curveToRelative(-0.317F, -0.162F, -0.651F, -0.294F, -1.0F, -0.393F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(3.707F)
          curveToRelative(0.099F, 0.349F, 0.23F, 0.683F, 0.393F, 1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(16.0F, 9.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 12.224F, 14.0F, 12.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _tabAdd20!!
  }

private var _tabAdd20: ImageVector? = null
