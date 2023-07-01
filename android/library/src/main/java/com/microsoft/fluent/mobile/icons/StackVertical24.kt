package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StackVertical24: ImageVector
  get() {
    if (_stackVertical24 != null) {
      return _stackVertical24!!
    }
    _stackVertical24 = fluentIcon(name = "Regular.StackVertical24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(4.0F)
          curveTo(4.5F, 20.664F, 4.164F, 21.0F, 3.75F, 21.0F)
          reflectiveCurveTo(3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineToRelative(-14.0F)
          close()
          moveToRelative(1.5F, 7.26F)
          curveTo(5.005F, 13.189F, 5.606F, 13.0F, 6.25F, 13.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.644F, 0.0F, 1.245F, 0.188F, 1.75F, 0.51F)
          verticalLineToRelative(-2.26F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(2.26F)
          close()
          moveToRelative(15.0F, -7.26F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(2.26F)
          curveTo(5.005F, 8.189F, 5.606F, 8.0F, 6.25F, 8.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.644F, 0.0F, 1.245F, 0.188F, 1.75F, 0.51F)
          verticalLineTo(6.25F)
          close()        
      }
    }
    return _stackVertical24!!
  }

private var _stackVertical24: ImageVector? = null
