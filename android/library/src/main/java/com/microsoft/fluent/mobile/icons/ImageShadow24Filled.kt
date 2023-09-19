package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageShadow24: ImageVector
  get() {
    if (_imageShadow24 != null) {
      return _imageShadow24!!
    }
    _imageShadow24 = fluentIcon(name = "Filled.ImageShadow24", 24f) {
      materialPath {
          moveTo(5.25F, 2.0F)
          curveTo(3.455F, 2.0F, 2.0F, 3.455F, 2.0F, 5.25F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.641F, 0.186F, 1.24F, 0.506F, 1.743F)
          lineToRelative(5.701F, -5.37F)
          curveToRelative(0.867F, -0.816F, 2.22F, -0.816F, 3.086F, 0.0F)
          lineToRelative(5.7F, 5.37F)
          curveToRelative(0.321F, -0.504F, 0.507F, -1.102F, 0.507F, -1.743F)
          verticalLineToRelative(-9.0F)
          curveTo(17.5F, 3.455F, 16.045F, 2.0F, 14.25F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(7.5F, 6.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveTo(14.0F, 6.06F, 14.0F, 6.75F)
          reflectiveCurveTo(13.44F, 8.0F, 12.75F, 8.0F)
          close()
          moveToRelative(-7.5F, 9.5F)
          curveToRelative(-0.61F, 0.0F, -1.18F, -0.168F, -1.668F, -0.46F)
          lineToRelative(5.654F, -5.325F)
          curveToRelative(0.289F, -0.272F, 0.74F, -0.272F, 1.028F, 0.0F)
          lineToRelative(5.654F, 5.325F)
          curveToRelative(-0.488F, 0.292F, -1.058F, 0.46F, -1.668F, 0.46F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(1.249F, 1.25F)
          verticalLineTo(18.5F)
          horizontalLineTo(14.5F)
          curveToRelative(0.08F, 0.0F, 0.16F, -0.002F, 0.238F, -0.007F)
          curveToRelative(2.099F, -0.123F, 3.763F, -1.864F, 3.763F, -3.993F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(0.248F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          close()        
      }
    }
    return _imageShadow24!!
  }

private var _imageShadow24: ImageVector? = null
