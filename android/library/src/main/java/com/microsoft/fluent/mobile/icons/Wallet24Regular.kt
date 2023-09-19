package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wallet24: ImageVector
  get() {
    if (_wallet24 != null) {
      return _wallet24!!
    }
    _wallet24 = fluentIcon(name = "Regular.Wallet24", 24f) {
      materialPath {
          moveTo(15.5F, 13.75F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(3.0F, 5.0F)
          horizontalLineToRelative(0.014F)
          curveTo(3.138F, 3.875F, 4.092F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(17.993F, 3.0F, 19.0F, 4.007F, 19.0F, 5.25F)
          verticalLineToRelative(0.837F)
          curveToRelative(1.433F, 0.339F, 2.5F, 1.626F, 2.5F, 3.163F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-12.0F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(15.25F, 2.5F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(10.25F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          close()
          moveTo(17.5F, 6.0F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.25F)
          curveTo(4.836F, 4.5F, 4.5F, 4.836F, 4.5F, 5.25F)
          reflectiveCurveTo(4.836F, 6.0F, 5.25F, 6.0F)
          horizontalLineTo(17.5F)
          close()        
      }
    }
    return _wallet24!!
  }

private var _wallet24: ImageVector? = null
