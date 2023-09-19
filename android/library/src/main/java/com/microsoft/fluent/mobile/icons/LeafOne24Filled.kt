package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LeafOne24: ImageVector
  get() {
    if (_leafOne24 != null) {
      return _leafOne24!!
    }
    _leafOne24 = fluentIcon(name = "Filled.LeafOne24", 24f) {
      materialPath {
          moveTo(11.037F, 3.048F)
          curveToRelative(0.68F, -0.448F, 1.603F, -0.374F, 2.2F, 0.224F)
          lineToRelative(3.712F, 3.712F)
          curveToRelative(2.733F, 2.733F, 2.733F, 7.164F, 0.0F, 9.897F)
          curveToRelative(-0.147F, 0.147F, -0.299F, 0.286F, -0.455F, 0.418F)
          curveToRelative(-0.39F, 0.327F, -0.809F, 0.606F, -1.246F, 0.835F)
          curveToRelative(-0.787F, 0.412F, -1.635F, 0.665F, -2.498F, 0.757F)
          verticalLineToRelative(2.359F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-2.36F)
          curveToRelative(-1.534F, -0.164F, -3.023F, -0.834F, -4.199F, -2.01F)
          curveToRelative(-2.733F, -2.733F, -2.733F, -7.164F, 0.0F, -9.897F)
          lineToRelative(3.712F, -3.712F)
          curveToRelative(0.085F, -0.085F, 0.177F, -0.16F, 0.274F, -0.224F)
          close()
          moveTo(12.0F, 11.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.335F, -0.75F, 0.75F)
          verticalLineToRelative(5.63F)
          curveToRelative(0.498F, 0.068F, 1.002F, 0.068F, 1.5F, 0.0F)
          verticalLineToRelative(-5.63F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _leafOne24!!
  }

private var _leafOne24: ImageVector? = null
