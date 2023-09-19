package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserMedium20: ImageVector
  get() {
    if (_eraserMedium20 != null) {
      return _eraserMedium20!!
    }
    _eraserMedium20 = fluentIcon(name = "Filled.EraserMedium20", 20f) {
      materialPath {
          moveTo(2.44F, 11.2F)
          curveToRelative(-0.587F, 0.586F, -0.587F, 1.536F, 0.0F, 2.122F)
          lineToRelative(4.242F, 4.242F)
          curveToRelative(0.586F, 0.586F, 1.535F, 0.586F, 2.121F, 0.0F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(-0.156F, -0.331F, -0.28F, -0.681F, -0.369F, -1.045F)
          lineToRelative(-1.058F, 1.058F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.242F, -4.242F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.69F, -1.69F)
          lineTo(9.0F, 14.381F)
          curveTo(9.064F, 11.399F, 11.501F, 9.0F, 14.5F, 9.0F)
          curveToRelative(0.838F, 0.0F, 1.633F, 0.188F, 2.344F, 0.523F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.535F, 0.0F, -2.121F)
          lineToRelative(-4.242F, -4.243F)
          curveToRelative(-0.586F, -0.586F, -1.536F, -0.586F, -2.122F, 0.0F)
          lineTo(2.44F, 11.2F)
          close()
          moveTo(14.5F, 19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 10.0F, 14.5F, 10.0F)
          reflectiveCurveTo(10.0F, 12.015F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()        
      }
    }
    return _eraserMedium20!!
  }

private var _eraserMedium20: ImageVector? = null
