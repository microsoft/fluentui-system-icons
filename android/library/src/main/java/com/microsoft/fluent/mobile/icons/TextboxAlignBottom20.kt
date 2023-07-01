package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignBottom20: ImageVector
  get() {
    if (_textboxAlignBottom20 != null) {
      return _textboxAlignBottom20!!
    }
    _textboxAlignBottom20 = fluentIcon(name = "Filled.TextboxAlignBottom20", 20f) {
      materialPath {
          moveTo(17.0F, 14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          close()
          moveTo(6.706F, 14.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 14.0F, 14.0F, 13.664F, 14.0F, 13.25F)
          reflectiveCurveToRelative(-0.316F, -0.75F, -0.706F, -0.75F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 12.5F, 6.0F, 12.836F, 6.0F, 13.25F)
          reflectiveCurveTo(6.316F, 14.0F, 6.706F, 14.0F)
          close()
          moveToRelative(0.0F, -3.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 11.0F, 14.0F, 10.664F, 14.0F, 10.25F)
          reflectiveCurveTo(13.684F, 9.5F, 13.294F, 9.5F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 9.5F, 6.0F, 9.836F, 6.0F, 10.25F)
          reflectiveCurveTo(6.316F, 11.0F, 6.706F, 11.0F)
          close()        
      }
    }
    return _textboxAlignBottom20!!
  }

private var _textboxAlignBottom20: ImageVector? = null
