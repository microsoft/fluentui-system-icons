package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Voicemail16: ImageVector
  get() {
    if (_voicemail16 != null) {
      return _voicemail16!!
    }
    _voicemail16 = fluentIcon(name = "Filled.Voicemail16", 16f) {
      materialPath {
          moveTo(5.0F, 7.75F)
          curveTo(5.0F, 7.336F, 5.336F, 7.0F, 5.75F, 7.0F)
          reflectiveCurveTo(6.5F, 7.336F, 6.5F, 7.75F)
          reflectiveCurveTo(6.164F, 8.5F, 5.75F, 8.5F)
          reflectiveCurveTo(5.0F, 8.164F, 5.0F, 7.75F)
          close()
          moveToRelative(4.5F, 0.0F)
          curveTo(9.5F, 7.336F, 9.836F, 7.0F, 10.25F, 7.0F)
          reflectiveCurveTo(11.0F, 7.336F, 11.0F, 7.75F)
          reflectiveCurveTo(10.664F, 8.5F, 10.25F, 8.5F)
          reflectiveCurveTo(9.5F, 8.164F, 9.5F, 7.75F)
          close()
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.672F, 13.328F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(4.0F, 4.75F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          reflectiveCurveTo(4.0F, 8.716F, 4.0F, 7.75F)
          reflectiveCurveTo(4.784F, 6.0F, 5.75F, 6.0F)
          horizontalLineToRelative(4.5F)
          curveTo(11.216F, 6.0F, 12.0F, 6.784F, 12.0F, 7.75F)
          reflectiveCurveTo(11.216F, 9.5F, 10.25F, 9.5F)
          reflectiveCurveTo(8.5F, 8.716F, 8.5F, 7.75F)
          curveTo(8.5F, 7.482F, 8.56F, 7.227F, 8.668F, 7.0F)
          horizontalLineTo(7.332F)
          curveTo(7.44F, 7.227F, 7.5F, 7.482F, 7.5F, 7.75F)
          close()        
      }
    }
    return _voicemail16!!
  }

private var _voicemail16: ImageVector? = null
