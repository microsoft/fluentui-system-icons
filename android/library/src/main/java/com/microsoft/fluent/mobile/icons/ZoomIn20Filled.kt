package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ZoomIn20: ImageVector
  get() {
    if (_zoomIn20 != null) {
      return _zoomIn20!!
    }
    _zoomIn20 = fluentIcon(name = "Filled.ZoomIn20", 20f) {
      materialPath {
          moveTo(14.0F, 8.5F)
          curveToRelative(0.0F, 1.248F, -0.416F, 2.4F, -1.117F, 3.323F)
          lineToRelative(4.147F, 4.147F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(15.97F, 17.03F)
          lineToRelative(-4.147F, -4.147F)
          curveTo(10.899F, 13.584F, 9.748F, 14.0F, 8.5F, 14.0F)
          curveTo(5.462F, 14.0F, 3.0F, 11.538F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 3.0F, 8.5F, 3.0F)
          reflectiveCurveTo(14.0F, 5.462F, 14.0F, 8.5F)
          close()
          moveTo(8.5F, 5.25F)
          curveTo(8.086F, 5.25F, 7.75F, 5.586F, 7.75F, 6.0F)
          verticalLineToRelative(1.75F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(5.586F, 9.25F, 6.0F, 9.25F)
          horizontalLineToRelative(1.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(9.25F, 11.414F, 9.25F, 11.0F)
          verticalLineTo(9.25F)
          horizontalLineTo(11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(11.414F, 7.75F, 11.0F, 7.75F)
          horizontalLineTo(9.25F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _zoomIn20!!
  }

private var _zoomIn20: ImageVector? = null
