package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Hd24: ImageVector
  get() {
    if (_hd24 != null) {
      return _hd24!!
    }
    _hd24 = fluentIcon(name = "Filled.Hd24", 24f) {
      materialPath {
          moveTo(14.5F, 14.5F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(0.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(14.5F)
          close()
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveToRelative(1.0F, 5.0F)
          curveTo(7.664F, 8.0F, 8.0F, 8.336F, 8.0F, 8.75F)
          verticalLineToRelative(2.75F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(8.75F)
          curveTo(10.0F, 8.336F, 10.336F, 8.0F, 10.75F, 8.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(10.0F, 15.664F, 10.0F, 15.25F)
          verticalLineTo(13.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(2.25F)
          curveTo(8.0F, 15.664F, 7.664F, 16.0F, 7.25F, 16.0F)
          reflectiveCurveTo(6.5F, 15.664F, 6.5F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(6.5F, 8.336F, 6.836F, 8.0F, 7.25F, 8.0F)
          close()
          moveToRelative(6.5F, 0.0F)
          horizontalLineToRelative(1.0F)
          curveTo(16.545F, 8.0F, 18.0F, 9.455F, 18.0F, 11.25F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-1.0F)
          curveTo(13.336F, 16.0F, 13.0F, 15.664F, 13.0F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(13.0F, 8.336F, 13.336F, 8.0F, 13.75F, 8.0F)
          close()        
      }
    }
    return _hd24!!
  }

private var _hd24: ImageVector? = null
