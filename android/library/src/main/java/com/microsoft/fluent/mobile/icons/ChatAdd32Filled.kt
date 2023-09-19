package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatAdd32: ImageVector
  get() {
    if (_chatAdd32 != null) {
      return _chatAdd32!!
    }
    _chatAdd32 = fluentIcon(name = "Filled.ChatAdd32", 32f) {
      materialPath {
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          curveToRelative(0.0F, 0.43F, -0.02F, 0.854F, -0.057F, 1.273F)
          curveTo(28.293F, 15.274F, 25.795F, 14.0F, 23.0F, 14.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 2.795F, 1.274F, 5.292F, 3.273F, 6.943F)
          curveTo(16.853F, 29.98F, 16.429F, 30.0F, 16.0F, 30.0F)
          curveToRelative(-2.368F, 0.0F, -4.602F, -0.589F, -6.56F, -1.629F)
          lineToRelative(-5.528F, 1.572F)
          curveToRelative(-1.13F, 0.322F, -2.174F, -0.723F, -1.853F, -1.853F)
          lineToRelative(1.572F, -5.527F)
          curveTo(2.59F, 20.605F, 2.0F, 18.37F, 2.0F, 16.0F)
          close()
          moveToRelative(21.0F, 14.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, -3.358F, -7.5F, -7.5F, -7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          close()
          moveToRelative(1.0F, -12.25F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(24.0F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(23.5F)
          horizontalLineToRelative(-3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(18.336F, 22.0F, 18.75F, 22.0F)
          horizontalLineToRelative(3.75F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(24.0F, 17.836F, 24.0F, 18.25F)
          close()        
      }
    }
    return _chatAdd32!!
  }

private var _chatAdd32: ImageVector? = null
