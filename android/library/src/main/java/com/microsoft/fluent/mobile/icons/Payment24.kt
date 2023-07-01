package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment24: ImageVector
  get() {
    if (_payment24 != null) {
      return _payment24!!
    }
    _payment24 = fluentIcon(name = "Regular.Payment24", 24f) {
      materialPath {
          moveTo(15.75F, 14.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(15.336F, 16.0F, 15.75F, 16.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.5F)
          close()
          moveTo(2.0F, 8.25F)
          curveTo(2.0F, 6.455F, 3.455F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 5.0F, 22.0F, 6.455F, 22.0F, 8.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 19.0F, 2.0F, 17.545F, 2.0F, 15.75F)
          verticalLineToRelative(-7.5F)
          close()
          moveTo(20.5F, 9.5F)
          verticalLineTo(8.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(5.25F)
          curveTo(4.284F, 6.5F, 3.5F, 7.284F, 3.5F, 8.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(17.0F)
          close()
          moveTo(3.5F, 11.0F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-17.0F)
          close()        
      }
    }
    return _payment24!!
  }

private var _payment24: ImageVector? = null
