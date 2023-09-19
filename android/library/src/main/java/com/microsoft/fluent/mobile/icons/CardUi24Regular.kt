package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CardUi24: ImageVector
  get() {
    if (_cardUi24 != null) {
      return _cardUi24!!
    }
    _cardUi24 = fluentIcon(name = "Regular.CardUi24", 24f) {
      materialPath {
          moveTo(5.25F, 4.0F)
          curveTo(3.455F, 4.0F, 2.0F, 5.455F, 2.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(2.0F, 18.545F, 3.455F, 20.0F, 5.25F, 20.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-9.5F)
          curveTo(22.0F, 5.455F, 20.545F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(3.5F, 7.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          close()
          moveTo(5.0F, 7.75F)
          curveTo(5.0F, 7.336F, 5.336F, 7.0F, 5.75F, 7.0F)
          horizontalLineToRelative(5.5F)
          curveTo(11.664F, 7.0F, 12.0F, 7.336F, 12.0F, 7.75F)
          reflectiveCurveTo(11.664F, 8.5F, 11.25F, 8.5F)
          horizontalLineToRelative(-5.5F)
          curveTo(5.336F, 8.5F, 5.0F, 8.164F, 5.0F, 7.75F)
          close()
          moveTo(6.0F, 13.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(-1.0F, -2.75F)
          curveTo(5.0F, 9.836F, 5.336F, 9.5F, 5.75F, 9.5F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.664F, 11.0F, 16.25F, 11.0F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 11.0F, 5.0F, 10.664F, 5.0F, 10.25F)
          close()        
      }
    }
    return _cardUi24!!
  }

private var _cardUi24: ImageVector? = null
