package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PipelinePlay20: ImageVector
  get() {
    if (_pipelinePlay20 != null) {
      return _pipelinePlay20!!
    }
    _pipelinePlay20 = fluentIcon(name = "Filled.PipelinePlay20", 20f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.672F, 2.672F, 4.0F, 3.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.671F, 5.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.0F, 15.33F, 4.328F, 16.0F, 3.5F, 16.0F)
          reflectiveCurveTo(2.0F, 15.328F, 2.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(12.0F, 3.522F)
          curveTo(11.361F, 9.26F, 9.26F, 11.362F, 9.022F, 14.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(3.022F)
          close()
          moveTo(15.0F, 5.5F)
          verticalLineToRelative(3.522F)
          curveToRelative(1.134F, 0.103F, 2.17F, 0.55F, 3.0F, 1.235F)
          verticalLineTo(5.5F)
          curveTo(18.0F, 4.672F, 17.328F, 4.0F, 16.5F, 4.0F)
          reflectiveCurveTo(15.0F, 4.672F, 15.0F, 5.5F)
          close()
          moveToRelative(4.0F, 9.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.287F, -0.437F)
          lineToRelative(-2.97F, -1.65F)
          curveTo(13.41F, 12.227F, 13.0F, 12.469F, 13.0F, 12.85F)
          verticalLineToRelative(3.3F)
          curveToRelative(0.0F, 0.382F, 0.41F, 0.623F, 0.743F, 0.437F)
          lineToRelative(2.97F, -1.65F)
          curveToRelative(0.343F, -0.19F, 0.343F, -0.684F, 0.0F, -0.874F)
          close()        
      }
    }
    return _pipelinePlay20!!
  }

private var _pipelinePlay20: ImageVector? = null
