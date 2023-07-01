package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarAdd16: ImageVector
  get() {
    if (_starAdd16 != null) {
      return _starAdd16!!
    }
    _starAdd16 = fluentIcon(name = "Filled.StarAdd16", 16f) {
      materialPath {
          moveTo(8.808F, 2.101F)
          curveToRelative(-0.33F, -0.669F, -1.284F, -0.669F, -1.614F, 0.0F)
          lineTo(5.673F, 5.183F)
          lineTo(2.272F, 5.678F)
          curveToRelative(-0.739F, 0.107F, -1.033F, 1.014F, -0.5F, 1.535F)
          lineToRelative(2.462F, 2.399F)
          lineToRelative(-0.581F, 3.387F)
          curveToRelative(-0.126F, 0.736F, 0.645F, 1.296F, 1.306F, 0.949F)
          lineToRelative(0.91F, -0.479F)
          curveTo(5.32F, 12.613F, 5.0F, 11.593F, 5.0F, 10.5F)
          curveToRelative(0.0F, -2.95F, 2.324F, -5.358F, 5.241F, -5.493F)
          lineTo(8.808F, 2.1F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          curveTo(6.0F, 8.014F, 8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.014F, 15.0F, 10.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(11.0F, 8.223F, 10.776F, 8.0F, 10.5F, 8.0F)
          reflectiveCurveTo(10.0F, 8.223F, 10.0F, 8.5F)
          verticalLineTo(10.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 10.0F, 8.0F, 10.223F, 8.0F, 10.5F)
          curveTo(8.0F, 10.776F, 8.224F, 11.0F, 8.5F, 11.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.277F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(11.0F)
          verticalLineTo(8.5F)
          close()        
      }
    }
    return _starAdd16!!
  }

private var _starAdd16: ImageVector? = null
