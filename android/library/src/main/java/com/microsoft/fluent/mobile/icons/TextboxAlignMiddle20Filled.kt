package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignMiddle20: ImageVector
  get() {
    if (_textboxAlignMiddle20 != null) {
      return _textboxAlignMiddle20!!
    }
    _textboxAlignMiddle20 = fluentIcon(name = "Filled.TextboxAlignMiddle20", 20f) {
      materialPath {
          moveTo(14.5F, 3.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(6.0F, 8.25F)
          curveTo(6.0F, 8.664F, 6.316F, 9.0F, 6.706F, 9.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 9.0F, 14.0F, 8.664F, 14.0F, 8.25F)
          reflectiveCurveTo(13.684F, 7.5F, 13.294F, 7.5F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 7.5F, 6.0F, 7.836F, 6.0F, 8.25F)
          close()
          moveToRelative(0.706F, 2.25F)
          curveTo(6.316F, 10.5F, 6.0F, 10.836F, 6.0F, 11.25F)
          reflectiveCurveTo(6.316F, 12.0F, 6.706F, 12.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 12.0F, 14.0F, 11.664F, 14.0F, 11.25F)
          reflectiveCurveToRelative(-0.316F, -0.75F, -0.706F, -0.75F)
          horizontalLineTo(6.706F)
          close()        
      }
    }
    return _textboxAlignMiddle20!!
  }

private var _textboxAlignMiddle20: ImageVector? = null
