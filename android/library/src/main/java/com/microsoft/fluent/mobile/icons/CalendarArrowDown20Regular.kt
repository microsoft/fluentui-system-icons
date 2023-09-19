package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarArrowDown20: ImageVector
  get() {
    if (_calendarArrowDown20 != null) {
      return _calendarArrowDown20!!
    }
    _calendarArrowDown20 = fluentIcon(name = "Regular.CalendarArrowDown20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(4.1F)
          curveToRelative(-0.162F, -0.317F, -0.294F, -0.651F, -0.393F, -1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(2.207F)
          curveToRelative(0.349F, 0.099F, 0.683F, 0.23F, 1.0F, 0.393F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(4.0F, 5.5F)
          curveTo(4.0F, 4.672F, 4.672F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(5.5F)
          close()
          moveToRelative(15.0F, 9.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.854F, 2.353F)
          lineToRelative(0.003F, 0.003F)
          curveToRelative(0.047F, 0.047F, 0.102F, 0.082F, 0.16F, 0.106F)
          curveTo(14.367F, 16.986F, 14.43F, 17.0F, 14.497F, 17.0F)
          horizontalLineToRelative(0.006F)
          curveToRelative(0.067F, 0.0F, 0.13F, -0.014F, 0.188F, -0.038F)
          curveToRelative(0.06F, -0.024F, 0.115F, -0.06F, 0.163F, -0.108F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(15.0F, 15.293F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 12.224F, 14.0F, 12.5F)
          verticalLineToRelative(2.793F)
          lineToRelative(-1.146F, -1.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          close()        
      }
    }
    return _calendarArrowDown20!!
  }

private var _calendarArrowDown20: ImageVector? = null
