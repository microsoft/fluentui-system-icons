package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataScatter20: ImageVector
  get() {
    if (_dataScatter20 != null) {
      return _dataScatter20!!
    }
    _dataScatter20 = fluentIcon(name = "Filled.DataScatter20", 20f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 17.776F, 2.224F, 18.0F, 2.5F, 18.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 17.0F, 17.5F, 17.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(2.5F)
          close()
          moveTo(7.5F, 10.0F)
          curveTo(8.88F, 10.0F, 10.0F, 8.88F, 10.0F, 7.5F)
          reflectiveCurveTo(8.88F, 5.0F, 7.5F, 5.0F)
          reflectiveCurveTo(5.0F, 6.12F, 5.0F, 7.5F)
          reflectiveCurveTo(6.12F, 10.0F, 7.5F, 10.0F)
          close()
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 6.88F, 15.88F, 8.0F, 14.5F, 8.0F)
          reflectiveCurveTo(12.0F, 6.88F, 12.0F, 5.5F)
          reflectiveCurveTo(13.12F, 3.0F, 14.5F, 3.0F)
          reflectiveCurveTo(17.0F, 4.12F, 17.0F, 5.5F)
          close()
          moveTo(12.5F, 15.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(13.88F, 10.0F, 12.5F, 10.0F)
          reflectiveCurveTo(10.0F, 11.12F, 10.0F, 12.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()        
      }
    }
    return _dataScatter20!!
  }

private var _dataScatter20: ImageVector? = null
