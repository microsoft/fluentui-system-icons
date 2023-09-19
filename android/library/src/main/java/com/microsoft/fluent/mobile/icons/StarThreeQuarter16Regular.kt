package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarThreeQuarter16: ImageVector
  get() {
    if (_starThreeQuarter16 != null) {
      return _starThreeQuarter16!!
    }
    _starThreeQuarter16 = fluentIcon(name = "Regular.StarThreeQuarter16", 16f) {
      materialPath {
          moveTo(8.808F, 2.101F)
          curveToRelative(-0.33F, -0.669F, -1.284F, -0.669F, -1.614F, 0.0F)
          lineTo(5.673F, 5.183F)
          lineTo(2.272F, 5.678F)
          curveToRelative(-0.739F, 0.107F, -1.033F, 1.014F, -0.5F, 1.535F)
          lineToRelative(2.462F, 2.399F)
          lineToRelative(-0.581F, 3.387F)
          curveToRelative(-0.126F, 0.736F, 0.645F, 1.296F, 1.306F, 0.949F)
          lineTo(8.0F, 12.348F)
          lineToRelative(3.042F, 1.6F)
          curveToRelative(0.66F, 0.347F, 1.432F, -0.213F, 1.306F, -0.949F)
          lineToRelative(-0.581F, -3.387F)
          lineToRelative(2.461F, -2.4F)
          curveToRelative(0.534F, -0.52F, 0.24F, -1.427F, -0.499F, -1.534F)
          lineToRelative(-3.4F, -0.495F)
          lineToRelative(-1.522F, -3.082F)
          close()
          moveTo(10.0F, 12.27F)
          verticalLineTo(6.136F)
          curveToRelative(0.043F, 0.013F, 0.088F, 0.023F, 0.133F, 0.03F)
          lineToRelative(3.253F, 0.472F)
          lineToRelative(-2.354F, 2.294F)
          curveTo(10.82F, 9.14F, 10.723F, 9.437F, 10.774F, 9.73F)
          lineToRelative(0.555F, 3.24F)
          lineTo(10.0F, 12.27F)
          close()        
      }
    }
    return _starThreeQuarter16!!
  }

private var _starThreeQuarter16: ImageVector? = null
