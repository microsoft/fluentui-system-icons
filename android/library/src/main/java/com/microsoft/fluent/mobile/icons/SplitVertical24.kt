package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitVertical24: ImageVector
  get() {
    if (_splitVertical24 != null) {
      return _splitVertical24!!
    }
    _splitVertical24 = fluentIcon(name = "Regular.SplitVertical24", 24f) {
      materialPath {
          moveTo(12.5F, 2.75F)
          curveTo(12.5F, 2.336F, 12.164F, 2.0F, 11.75F, 2.0F)
          reflectiveCurveTo(11.0F, 2.336F, 11.0F, 2.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.75F)
          close()
          moveTo(4.25F, 4.0F)
          curveTo(3.007F, 4.0F, 2.0F, 5.007F, 2.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(2.0F, 18.993F, 3.007F, 20.0F, 4.25F, 20.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-1.5F)
          horizontalLineTo(4.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(10.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(4.25F)
          close()
          moveToRelative(15.0F, 14.5F)
          horizontalLineTo(13.5F)
          verticalLineTo(20.0F)
          horizontalLineToRelative(5.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(6.25F)
          curveTo(21.5F, 5.007F, 20.493F, 4.0F, 19.25F, 4.0F)
          horizontalLineTo(13.5F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(5.75F)
          curveTo(19.664F, 5.5F, 20.0F, 5.836F, 20.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          close()        
      }
    }
    return _splitVertical24!!
  }

private var _splitVertical24: ImageVector? = null
