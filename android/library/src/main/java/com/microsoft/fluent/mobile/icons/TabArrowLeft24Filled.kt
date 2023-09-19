package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabArrowLeft24: ImageVector
  get() {
    if (_tabArrowLeft24 != null) {
      return _tabArrowLeft24!!
    }
    _tabArrowLeft24 = fluentIcon(name = "Filled.TabArrowLeft24", 24f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(6.272F)
          curveToRelative(-0.605F, -0.388F, -1.28F, -0.678F, -2.0F, -0.848F)
          verticalLineTo(5.75F)
          curveTo(19.0F, 5.336F, 18.664F, 5.0F, 18.25F, 5.0F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 5.0F, 5.0F, 5.336F, 5.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(5.0F, 18.664F, 5.336F, 19.0F, 5.75F, 19.0F)
          horizontalLineToRelative(5.424F)
          curveToRelative(0.17F, 0.72F, 0.46F, 1.395F, 0.848F, 2.0F)
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
