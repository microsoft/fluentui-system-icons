package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search24: ImageVector
  get() {
    if (_search24 != null) {
      return _search24!!
    }
    _search24 = fluentIcon(name = "Filled.Search24", 24f) {
      materialPath {
          moveTo(10.0F, 2.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 1.71F, -0.572F, 3.287F, -1.536F, 4.548F)
          lineToRelative(4.743F, 4.745F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.083F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-4.745F, -4.743F)
          curveTo(13.287F, 16.928F, 11.71F, 17.5F, 10.0F, 17.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(-3.038F, 0.0F, -5.5F, 2.462F, -5.5F, 5.5F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveToRelative(-2.462F, -5.5F, -5.5F, -5.5F)
          close()        
      }
    }
    return _search24!!
  }

private var _search24: ImageVector? = null
