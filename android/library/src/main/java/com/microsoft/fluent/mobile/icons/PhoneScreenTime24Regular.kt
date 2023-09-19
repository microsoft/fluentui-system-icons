package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhoneScreenTime24: ImageVector
  get() {
    if (_phoneScreenTime24 != null) {
      return _phoneScreenTime24!!
    }
    _phoneScreenTime24 = fluentIcon(name = "Regular.PhoneScreenTime24", 24f) {
      materialPath {
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveTo(13.75F, 2.0F)
          curveTo(14.993F, 2.0F, 16.0F, 3.007F, 16.0F, 4.25F)
          verticalLineToRelative(6.924F)
          curveToRelative(-0.528F, 0.125F, -1.03F, 0.314F, -1.5F, 0.558F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-7.5F)
          curveTo(5.836F, 3.5F, 5.5F, 3.836F, 5.5F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          lineToRelative(5.483F, 0.001F)
          curveToRelative(0.287F, 0.551F, 0.651F, 1.056F, 1.077F, 1.5F)
          lineTo(6.25F, 22.0F)
          curveTo(5.007F, 22.0F, 4.0F, 20.993F, 4.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(4.0F, 3.007F, 5.007F, 2.0F, 6.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveTo(8.749F, 17.504F)
          lineTo(11.0F, 17.499F)
          curveToRelative(0.0F, 0.517F, 0.06F, 1.02F, 0.174F, 1.5F)
          lineTo(8.75F, 19.005F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.751F, -0.75F)
          curveToRelative(0.0F, -0.413F, 0.335F, -0.75F, 0.749F, -0.75F)
          close()
          moveTo(16.5F, 14.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.002F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(-3.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _phoneScreenTime24!!
  }

private var _phoneScreenTime24: ImageVector? = null
