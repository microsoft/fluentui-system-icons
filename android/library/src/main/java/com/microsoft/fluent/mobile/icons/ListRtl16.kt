package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ListRtl16: ImageVector
  get() {
    if (_listRtl16 != null) {
      return _listRtl16!!
    }
    _listRtl16 = fluentIcon(name = "Filled.ListRtl16", 16f) {
      materialPath {
          moveTo(5.0F, 3.75F)
          curveTo(5.0F, 3.336F, 5.336F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(13.664F, 3.0F, 14.0F, 3.336F, 14.0F, 3.75F)
          reflectiveCurveTo(13.664F, 4.5F, 13.25F, 4.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(5.336F, 4.5F, 5.0F, 4.164F, 5.0F, 3.75F)
          close()
          moveToRelative(1.0F, 8.0F)
          curveTo(6.0F, 11.336F, 6.336F, 11.0F, 6.75F, 11.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(6.336F, 12.5F, 6.0F, 12.164F, 6.0F, 11.75F)
          close()
          moveTo(2.75F, 7.0F)
          curveTo(2.336F, 7.0F, 2.0F, 7.336F, 2.0F, 7.75F)
          reflectiveCurveTo(2.336F, 8.5F, 2.75F, 8.5F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 8.5F, 14.0F, 8.164F, 14.0F, 7.75F)
          reflectiveCurveTo(13.664F, 7.0F, 13.25F, 7.0F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _listRtl16!!
  }

private var _listRtl16: ImageVector? = null
