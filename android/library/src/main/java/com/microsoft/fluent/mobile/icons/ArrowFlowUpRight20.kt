package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFlowUpRight20: ImageVector
  get() {
    if (_arrowFlowUpRight20 != null) {
      return _arrowFlowUpRight20!!
    }
    _arrowFlowUpRight20 = fluentIcon(name = "Filled.ArrowFlowUpRight20", 20f) {
      materialPath {
          moveTo(14.314F, 3.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(16.253F, 6.5F)
          horizontalLineTo(12.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(7.958F)
          curveTo(7.721F, 11.081F, 6.487F, 10.0F, 5.0F, 10.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.487F, 0.0F, 2.72F, -1.081F, 2.958F, -2.5F)
          horizontalLineTo(8.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.829F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.253F)
          lineToRelative(-2.646F, 2.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.0F)
          lineToRelative(3.5F, -3.5F)
          curveTo(17.907F, 7.26F, 17.96F, 7.133F, 17.96F, 7.0F)
          curveToRelative(0.0F, -0.133F, -0.053F, -0.26F, -0.146F, -0.354F)
          lineToRelative(-3.5F, -3.5F)
          close()        
      }
    }
    return _arrowFlowUpRight20!!
  }

private var _arrowFlowUpRight20: ImageVector? = null
