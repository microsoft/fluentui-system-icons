package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Receipt24: ImageVector
  get() {
    if (_receipt24 != null) {
      return _receipt24!!
    }
    _receipt24 = fluentIcon(name = "Filled.Receipt24", 24f) {
      materialPath {
          moveTo(3.0F, 5.25F)
          curveTo(3.0F, 4.007F, 4.007F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(9.5F)
          curveTo(15.993F, 3.0F, 17.0F, 4.007F, 17.0F, 5.25F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(5.25F)
          close()
          moveTo(17.0F, 19.5F)
          horizontalLineToRelative(0.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(15.5F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(6.5F, 7.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 7.0F, 12.75F, 7.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(6.836F, 7.0F, 6.5F, 7.336F, 6.5F, 7.75F)
          close()
          moveTo(7.25F, 11.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 11.0F, 12.75F, 11.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveTo(6.5F, 15.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.664F, 15.0F, 10.25F, 15.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()        
      }
    }
    return _receipt24!!
  }

private var _receipt24: ImageVector? = null
