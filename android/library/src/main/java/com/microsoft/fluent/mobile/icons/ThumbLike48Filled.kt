package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbLike48: ImageVector
  get() {
    if (_thumbLike48 != null) {
      return _thumbLike48!!
    }
    _thumbLike48 = fluentIcon(name = "Filled.ThumbLike48", 48f) {
      materialPath {
          moveTo(28.227F, 1.989F)
          curveToRelative(-1.648F, -0.49F, -2.956F, 0.716F, -3.383F, 1.881F)
          curveToRelative(-0.245F, 0.666F, -0.468F, 1.284F, -0.678F, 1.864F)
          curveToRelative(-0.834F, 2.306F, -1.449F, 4.005F, -2.289F, 5.715F)
          curveToRelative(-2.65F, 5.399F, -6.033F, 9.624F, -12.357F, 12.526F)
          curveToRelative(-2.414F, 1.108F, -3.964F, 3.798F, -3.205F, 6.525F)
          lineToRelative(1.234F, 4.432F)
          curveToRelative(0.706F, 2.538F, 2.733F, 4.493F, 5.295F, 5.107F)
          lineToRelative(14.07F, 3.37F)
          curveToRelative(4.859F, 1.164F, 9.764F, -1.74F, 11.079F, -6.56F)
          lineToRelative(3.334F, -12.217F)
          curveTo(42.238F, 21.292F, 39.724F, 18.0F, 36.262F, 18.0F)
          horizontalLineToRelative(-5.04F)
          curveToRelative(0.714F, -2.44F, 1.262F, -5.43F, 1.24F, -8.15F)
          curveToRelative(-0.014F, -1.689F, -0.248F, -3.368F, -0.871F, -4.764F)
          curveToRelative(-0.639F, -1.43F, -1.713F, -2.608F, -3.364F, -3.097F)
          close()        
      }
    }
    return _thumbLike48!!
  }

private var _thumbLike48: ImageVector? = null
