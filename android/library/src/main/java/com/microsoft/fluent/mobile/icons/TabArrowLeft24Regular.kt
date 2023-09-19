package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabArrowLeft24: ImageVector
  get() {
    if (_tabArrowLeft24 != null) {
      return _tabArrowLeft24!!
    }
    _tabArrowLeft24 = fluentIcon(name = "Regular.TabArrowLeft24", 24f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(6.272F)
          curveToRelative(-0.463F, -0.297F, -0.966F, -0.536F, -1.5F, -0.709F)
          verticalLineTo(5.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(5.75F)
          curveTo(5.06F, 4.5F, 4.5F, 5.06F, 4.5F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(5.563F)
          curveToRelative(0.173F, 0.534F, 0.412F, 1.037F, 0.709F, 1.5F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.769F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          close()
          moveTo(17.5F, 23.0F)
          curveToRelative(-3.038F, 0.0F, -5.5F, -2.462F, -5.5F, -5.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          reflectiveCurveToRelative(5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveToRelative(-2.462F, 5.5F, -5.5F, 5.5F)
          close()
          moveToRelative(3.0F, -5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(20.776F, 17.0F, 20.5F, 17.0F)
          horizontalLineToRelative(-4.793F)
          lineToRelative(1.647F, -1.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(15.707F, 18.0F)
          horizontalLineTo(20.5F)
          close()        
      }
    }
    return _tabArrowLeft24!!
  }

private var _tabArrowLeft24: ImageVector? = null
