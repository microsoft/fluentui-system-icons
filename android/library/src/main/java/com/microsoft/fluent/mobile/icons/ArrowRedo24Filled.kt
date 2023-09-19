package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRedo24: ImageVector
  get() {
    if (_arrowRedo24 != null) {
      return _arrowRedo24!!
    }
    _arrowRedo24 = fluentIcon(name = "Filled.ArrowRedo24", 24f) {
      materialPath {
          moveTo(18.0F, 7.586F)
          lineToRelative(-3.64F, -3.635F)
          curveToRelative(-2.601F, -2.601F, -6.819F, -2.601F, -9.42F, 0.0F)
          reflectiveCurveToRelative(-2.601F, 6.819F, 0.0F, 9.42F)
          lineToRelative(8.339F, 8.337F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.391F, 0.39F, -1.024F, 0.0F, -1.415F)
          lineToRelative(-8.339F, -8.336F)
          curveToRelative(-1.82F, -1.82F, -1.82F, -4.772F, 0.0F, -6.592F)
          curveToRelative(1.764F, -1.763F, 4.588F, -1.818F, 6.418F, -0.165F)
          lineToRelative(0.174F, 0.166F)
          lineToRelative(3.64F, 3.633F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, 0.387F, -0.993F, 0.884F)
          lineTo(11.0F, 10.0F)
          curveToRelative(0.0F, 0.512F, 0.386F, 0.935F, 0.883F, 0.993F)
          lineTo(12.0F, 10.999F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, -0.386F, 0.993F, -0.883F)
          lineTo(20.0F, 10.0F)
          verticalLineTo(3.002F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, 0.386F, -0.993F, 0.884F)
          lineTo(18.0F, 3.002F)
          verticalLineToRelative(4.584F)
          lineToRelative(-3.64F, -3.635F)
          lineTo(18.0F, 7.586F)
          close()        
      }
    }
    return _arrowRedo24!!
  }

private var _arrowRedo24: ImageVector? = null
