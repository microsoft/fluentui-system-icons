package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarArrowRight16: ImageVector
  get() {
    if (_calendarArrowRight16 != null) {
      return _calendarArrowRight16!!
    }
    _calendarArrowRight16 = fluentIcon(name = "Filled.CalendarArrowRight16", 16f) {
      materialPath {
          moveTo(11.5F, 6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(2.1F)
          curveTo(6.216F, 13.25F, 6.0F, 12.4F, 6.0F, 11.5F)
          curveTo(6.0F, 8.462F, 8.462F, 6.0F, 11.5F, 6.0F)
          close()
          moveTo(14.0F, 4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(11.5F, 7.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveTo(13.985F, 16.0F, 11.5F, 16.0F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          close()
          moveToRelative(2.353F, 4.854F)
          lineToRelative(0.003F, -0.003F)
          curveToRelative(0.047F, -0.047F, 0.082F, -0.102F, 0.106F, -0.16F)
          curveTo(13.986F, 11.633F, 14.0F, 11.57F, 14.0F, 11.503F)
          verticalLineToRelative(-0.006F)
          curveToRelative(0.0F, -0.067F, -0.014F, -0.13F, -0.038F, -0.188F)
          curveToRelative(-0.024F, -0.06F, -0.06F, -0.115F, -0.108F, -0.163F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(12.293F, 11.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 11.0F, 9.0F, 11.224F, 9.0F, 11.5F)
          reflectiveCurveTo(9.224F, 12.0F, 9.5F, 12.0F)
          horizontalLineToRelative(2.793F)
          lineToRelative(-1.147F, 1.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          close()        
      }
    }
    return _calendarArrowRight16!!
  }

private var _calendarArrowRight16: ImageVector? = null
