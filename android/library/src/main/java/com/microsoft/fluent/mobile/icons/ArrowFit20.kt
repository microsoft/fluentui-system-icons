package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFit20: ImageVector
  get() {
    if (_arrowFit20 != null) {
      return _arrowFit20!!
    }
    _arrowFit20 = fluentIcon(name = "Filled.ArrowFit20", 20f) {
      materialPath {
          moveTo(5.791F, 6.72F)
          curveTo(6.084F, 7.015F, 6.083F, 7.49F, 5.79F, 7.782F)
          lineTo(4.566F, 9.0F)
          horizontalLineTo(8.25F)
          curveTo(8.664F, 9.0F, 9.0F, 9.336F, 9.0F, 9.75F)
          reflectiveCurveTo(8.664F, 10.5F, 8.25F, 10.5F)
          horizontalLineTo(4.56F)
          lineToRelative(1.22F, 1.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveTo(2.079F, 10.14F, 2.0F, 9.948F, 2.0F, 9.75F)
          curveToRelative(0.0F, -0.2F, 0.08F, -0.39F, 0.22F, -0.531F)
          lineToRelative(2.51F, -2.5F)
          curveTo(5.025F, 6.426F, 5.5F, 6.427F, 5.792F, 6.72F)
          close()
          moveToRelative(8.429F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.22F, -1.22F)
          horizontalLineToRelative(-3.69F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(11.336F, 9.0F, 11.75F, 9.0F)
          horizontalLineToRelative(3.69F)
          lineToRelative(-1.22F, -1.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowFit20!!
  }

private var _arrowFit20: ImageVector? = null
