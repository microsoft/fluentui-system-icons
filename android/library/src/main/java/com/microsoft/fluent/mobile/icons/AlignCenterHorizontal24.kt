package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterHorizontal24: ImageVector
  get() {
    if (_alignCenterHorizontal24 != null) {
      return _alignCenterHorizontal24!!
    }
    _alignCenterHorizontal24 = fluentIcon(name = "Filled.AlignCenterHorizontal24", 24f) {
      materialPath {
          moveTo(21.25F, 12.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(20.0F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-2.5F)
          curveTo(14.007F, 6.5F, 13.0F, 7.507F, 13.0F, 8.75F)
          verticalLineToRelative(2.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-4.5F)
          curveTo(11.0F, 5.507F, 9.993F, 4.5F, 8.75F, 4.5F)
          horizontalLineToRelative(-2.5F)
          curveTo(5.007F, 4.5F, 4.0F, 5.507F, 4.0F, 6.75F)
          verticalLineToRelative(4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.25F, 2.0F, 11.586F, 2.0F, 12.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-4.5F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-2.5F)
          horizontalLineToRelative(1.25F)
          close()        
      }
    }
    return _alignCenterHorizontal24!!
  }

private var _alignCenterHorizontal24: ImageVector? = null
