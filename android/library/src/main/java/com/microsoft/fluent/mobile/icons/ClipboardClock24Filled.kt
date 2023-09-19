package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ClipboardClock24: ImageVector
  get() {
    if (_clipboardClock24 != null) {
      return _clipboardClock24!!
    }
    _clipboardClock24 = fluentIcon(name = "Filled.ClipboardClock24", 24f) {
      materialPath {
          moveTo(11.375F, 13.62F)
          curveToRelative(0.0F, 0.345F, 0.28F, 0.625F, 0.625F, 0.625F)
          lineToRelative(0.063F, -0.003F)
          lineToRelative(0.062F, 0.003F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.345F, 0.0F, 0.625F, -0.28F, 0.625F, -0.625F)
          reflectiveCurveToRelative(-0.28F, -0.625F, -0.625F, -0.625F)
          horizontalLineToRelative(-0.75F)
          verticalLineTo(11.37F)
          curveToRelative(0.0F, -0.345F, -0.28F, -0.625F, -0.625F, -0.625F)
          reflectiveCurveToRelative(-0.625F, 0.28F, -0.625F, 0.625F)
          verticalLineToRelative(2.25F)
          close()
          moveTo(13.75F, 2.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(9.092F, 2.0F, 8.138F, 2.875F, 8.014F, 4.0F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 4.0F, 4.0F, 5.007F, 4.0F, 6.25F)
          verticalLineToRelative(13.5F)
          curveTo(4.0F, 20.993F, 5.007F, 22.0F, 6.25F, 22.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(6.25F)
          curveTo(20.0F, 5.007F, 18.993F, 4.0F, 17.75F, 4.0F)
          horizontalLineToRelative(-1.764F)
          curveToRelative(-0.124F, -1.125F, -1.078F, -2.0F, -2.236F, -2.0F)
          close()
          moveToRelative(-3.5F, 1.5F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(14.164F, 5.0F, 13.75F, 5.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(9.836F, 5.0F, 9.5F, 4.664F, 9.5F, 4.25F)
          reflectiveCurveTo(9.836F, 3.5F, 10.25F, 3.5F)
          close()
          moveTo(12.0F, 8.25F)
          curveToRelative(2.623F, 0.0F, 4.75F, 2.127F, 4.75F, 4.75F)
          reflectiveCurveToRelative(-2.127F, 4.75F, -4.75F, 4.75F)
          reflectiveCurveTo(7.25F, 15.623F, 7.25F, 13.0F)
          reflectiveCurveTo(9.377F, 8.25F, 12.0F, 8.25F)
          close()        
      }
    }
    return _clipboardClock24!!
  }

private var _clipboardClock24: ImageVector? = null
