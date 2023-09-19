package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDownRight16: ImageVector
  get() {
    if (_arrowCircleDownRight16 != null) {
      return _arrowCircleDownRight16!!
    }
    _arrowCircleDownRight16 = fluentIcon(name = "Filled.ArrowCircleDownRight16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(1.5F, 4.0F)
          lineTo(9.41F, 6.006F)
          curveTo(9.208F, 6.044F, 9.047F, 6.205F, 9.01F, 6.41F)
          lineTo(9.0F, 6.5F)
          verticalLineToRelative(1.794F)
          lineTo(6.854F, 6.146F)
          lineTo(6.785F, 6.088F)
          curveToRelative(-0.17F, -0.118F, -0.398F, -0.118F, -0.568F, 0.0F)
          lineToRelative(-0.07F, 0.058F)
          lineTo(6.09F, 6.215F)
          curveToRelative(-0.118F, 0.17F, -0.118F, 0.398F, 0.0F, 0.568F)
          lineToRelative(0.058F, 0.07F)
          lineTo(8.294F, 9.0F)
          horizontalLineTo(6.5F)
          lineTo(6.41F, 9.01F)
          curveTo(6.178F, 9.05F, 6.0F, 9.255F, 6.0F, 9.5F)
          reflectiveCurveToRelative(0.177F, 0.45F, 0.41F, 0.492F)
          lineTo(6.5F, 10.0F)
          horizontalLineToRelative(3.0F)
          lineToRelative(0.058F, -0.005F)
          lineToRelative(0.05F, -0.007F)
          lineToRelative(0.064F, -0.019F)
          lineToRelative(0.04F, -0.016F)
          lineToRelative(0.076F, -0.044F)
          lineToRelative(0.065F, -0.056F)
          lineToRelative(0.044F, -0.05F)
          lineToRelative(0.036F, -0.053F)
          lineToRelative(0.02F, -0.039F)
          lineToRelative(0.023F, -0.059F)
          lineToRelative(0.013F, -0.047F)
          lineTo(10.0F, 9.521F)
          verticalLineTo(6.5F)
          lineTo(9.994F, 6.41F)
          curveTo(9.956F, 6.205F, 9.795F, 6.044F, 9.59F, 6.007F)
          lineTo(9.5F, 6.0F)
          lineTo(9.41F, 6.007F)
          lineTo(9.5F, 6.0F)
          close()        
      }
    }
    return _arrowCircleDownRight16!!
  }

private var _arrowCircleDownRight16: ImageVector? = null
