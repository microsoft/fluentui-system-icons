package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentArrowRight24: ImageVector
  get() {
    if (_documentArrowRight24 != null) {
      return _documentArrowRight24!!
    }
    _documentArrowRight24 = fluentIcon(name = "Filled.DocumentArrowRight24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-6.81F)
          curveToRelative(1.121F, -1.168F, 1.81F, -2.753F, 1.81F, -4.5F)
          curveToRelative(0.0F, -3.59F, -2.91F, -6.5F, -6.5F, -6.5F)
          curveToRelative(-0.886F, 0.0F, -1.73F, 0.177F, -2.5F, 0.498F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveTo(13.5F, 2.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(5.5F)
          lineToRelative(-6.0F, -6.0F)
          close()
          moveToRelative(-1.5F, 15.0F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          reflectiveCurveTo(1.0F, 20.538F, 1.0F, 17.5F)
          reflectiveCurveTo(3.462F, 12.0F, 6.5F, 12.0F)
          reflectiveCurveToRelative(5.5F, 2.462F, 5.5F, 5.5F)
          close()
          moveTo(3.5F, 17.0F)
          curveTo(3.224F, 17.0F, 3.0F, 17.224F, 3.0F, 17.5F)
          reflectiveCurveTo(3.224F, 18.0F, 3.5F, 18.0F)
          horizontalLineToRelative(4.793F)
          lineToRelative(-1.646F, 1.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(8.293F, 17.0F)
          horizontalLineTo(3.5F)
          close()        
      }
    }
    return _documentArrowRight24!!
  }

private var _documentArrowRight24: ImageVector? = null
