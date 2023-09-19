package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterVertical24: ImageVector
  get() {
    if (_alignCenterVertical24 != null) {
      return _alignCenterVertical24!!
    }
    _alignCenterVertical24 = fluentIcon(name = "Filled.AlignCenterVertical24", 24f) {
      materialPath {
          moveTo(11.25F, 21.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(20.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-2.5F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-2.5F)
          curveTo(19.5F, 5.007F, 18.493F, 4.0F, 17.25F, 4.0F)
          horizontalLineToRelative(-4.5F)
          verticalLineTo(2.75F)
          curveTo(12.75F, 2.336F, 12.414F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(5.507F, 4.0F, 4.5F, 5.007F, 4.5F, 6.25F)
          verticalLineToRelative(2.5F)
          curveTo(4.5F, 9.993F, 5.507F, 11.0F, 6.75F, 11.0F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineToRelative(2.5F)
          curveTo(6.5F, 18.993F, 7.507F, 20.0F, 8.75F, 20.0F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(1.25F)
          close()        
      }
    }
    return _alignCenterVertical24!!
  }

private var _alignCenterVertical24: ImageVector? = null
