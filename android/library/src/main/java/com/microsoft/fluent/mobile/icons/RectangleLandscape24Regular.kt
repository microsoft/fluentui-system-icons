package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RectangleLandscape24: ImageVector
  get() {
    if (_rectangleLandscape24 != null) {
      return _rectangleLandscape24!!
    }
    _rectangleLandscape24 = fluentIcon(name = "Regular.RectangleLandscape24", 24f) {
      materialPath {
          moveTo(2.0F, 7.25F)
          curveTo(2.0F, 5.455F, 3.455F, 4.0F, 5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 4.0F, 22.0F, 5.455F, 22.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 20.0F, 2.0F, 18.545F, 2.0F, 16.75F)
          verticalLineToRelative(-9.5F)
          close()
          moveTo(5.25F, 5.5F)
          curveTo(4.284F, 5.5F, 3.5F, 6.284F, 3.5F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(5.25F)
          close()        
      }
    }
    return _rectangleLandscape24!!
  }

private var _rectangleLandscape24: ImageVector? = null
