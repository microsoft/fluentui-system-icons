package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Power20: ImageVector
  get() {
    if (_power20 != null) {
      return _power20!!
    }
    _power20 = fluentIcon(name = "Filled.Power20", 20f) {
      materialPath {
          moveTo(10.75F, 2.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.25F, 2.086F, 9.25F, 2.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.0F)
          close()
          moveTo(13.743F, 4.0F)
          curveToRelative(-0.359F, -0.206F, -0.817F, -0.082F, -1.024F, 0.277F)
          curveToRelative(-0.207F, 0.358F, -0.083F, 0.817F, 0.276F, 1.024F)
          curveToRelative(1.144F, 0.66F, 2.04F, 1.678F, 2.546F, 2.898F)
          curveToRelative(0.507F, 1.22F, 0.597F, 2.573F, 0.256F, 3.85F)
          curveToRelative(-0.341F, 1.276F, -1.094F, 2.404F, -2.141F, 3.209F)
          curveToRelative(-1.048F, 0.805F, -2.332F, 1.241F, -3.653F, 1.242F)
          curveToRelative(-1.32F, 0.0F, -2.605F, -0.435F, -3.654F, -1.238F)
          curveToRelative(-1.048F, -0.804F, -1.802F, -1.932F, -2.144F, -3.207F)
          curveToRelative(-0.342F, -1.277F, -0.254F, -2.63F, 0.251F, -3.85F)
          curveToRelative(0.506F, -1.22F, 1.4F, -2.24F, 2.544F, -2.901F)
          curveToRelative(0.359F, -0.207F, 0.482F, -0.666F, 0.274F, -1.025F)
          curveTo(7.067F, 3.921F, 6.61F, 3.798F, 6.25F, 4.005F)
          curveTo(4.82F, 4.83F, 3.702F, 6.105F, 3.07F, 7.63F)
          curveToRelative(-0.631F, 1.525F, -0.742F, 3.217F, -0.314F, 4.812F)
          curveToRelative(0.428F, 1.595F, 1.37F, 3.004F, 2.68F, 4.009F)
          curveToRelative(1.311F, 1.005F, 2.917F, 1.549F, 4.568F, 1.548F)
          curveToRelative(1.651F, 0.0F, 3.256F, -0.547F, 4.566F, -1.553F)
          curveToRelative(1.309F, -1.006F, 2.25F, -2.416F, 2.676F, -4.011F)
          curveToRelative(0.426F, -1.596F, 0.314F, -3.287F, -0.32F, -4.813F)
          curveTo(16.293F, 6.097F, 15.174F, 4.824F, 13.743F, 4.0F)
          close()        
      }
    }
    return _power20!!
  }

private var _power20: ImageVector? = null
